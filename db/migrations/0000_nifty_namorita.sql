CREATE TABLE "submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"role" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"city" text NOT NULL,
	"port" text,
	"delivery_city" text,
	"haul_dates" jsonb,
	"fleet_base_city" text,
	"origin_states" jsonb,
	"destination_states" jsonb,
	"payment_terms" text,
	"pricing_mode" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
