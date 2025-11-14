CREATE TABLE "t_contact" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200) NOT NULL,
	"tel" varchar(20),
	"email" varchar(200) NOT NULL,
	"contact" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
