import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db/drizzle'; // *********** 나중에 이 경로로 drizzle 패키지 설치 및 drizzle 을 DB(Neon Postgres) 와 연결하는 객체를 생성한다.

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg', // or "mysql", "sqlite"
    }),
});
