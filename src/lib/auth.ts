import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db/drizzle'; // drizzle 과 DB(Neon Postgres) 연결 객체 생성
import { nextCookies } from 'better-auth/next-js'; //  nextCookies 객체
import { schema } from '@/db/schema'; //  schema 설정 가져오기

export const auth = betterAuth({
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: 'pg', // or "mysql", "sqlite"
        schema, //  schema 설정
    }),
    plugins: [nextCookies()], //  nextCookies 플러그인에 추가
});
