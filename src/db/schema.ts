import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const contactTable = pgTable('t_contact', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 200 }).notNull(),
  tel: varchar('tel', { length: 20 }),
  email: varchar('email', { length: 200 }).notNull(),
  message: text('contact').notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
});
