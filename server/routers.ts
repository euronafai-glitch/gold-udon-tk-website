import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createInquiry, getAllInquiries } from "./db";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  inquiry: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "ชื่อจำเป็นต้องระบุ"),
          email: z.string().email("อีเมลไม่ถูกต้อง"),
          phone: z.string().min(9, "เบอร์โทรศัพท์ไม่ถูกต้อง"),
          subject: z.string().min(1, "หัวข้อจำเป็นต้องระบุ"),
          message: z.string().min(10, "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createInquiry({
            name: input.name,
            email: input.email,
            phone: input.phone,
            subject: input.subject,
            message: input.message,
            status: "new",
          });
          return {
            success: true,
            message: "ส่งข้อมูลสำเร็จแล้ว เราจะติดต่อคุณในเร็วๆ นี้",
          };
        } catch (error) {
          console.error("Failed to submit inquiry:", error);
          throw new Error("ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่");
        }
      }),
    getAll: publicProcedure.query(async () => {
      return await getAllInquiries();
    }),
  }),
});

export type AppRouter = typeof appRouter;
