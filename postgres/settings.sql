-- a mock of settings table in blanker.

BEGIN; 

-- create table.

CREATE TABLE public.settings (
  id BIGSERIAL PRIMARY KEY,
  chosen_theme varchar(5) NOT NULL DEFAULT 'dark',
  chosen_language varchar(10) NOT NULL DEFAULT 'en'
);

-- implement row-level security.

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY policy_to_read_settings ON public.settings
AS PERMISSIVE FOR SELECT
TO authenticated
USING (id = 1);

CREATE POLICY policy_to_update_settings ON public.settings
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (id = 1)
WITH CHECK (id = 1);

-- set up triggers.

-- 1. trigger to insert settings entry.

CREATE OR REPLACE FUNCTION public.create_entry()
RETURNS trigger
LANGUAGE plpgsql
AS
$$
BEGIN
  INSERT INTO public.settings (id) VALUES (NEW.id);
  RETURN NEW;
END;
$$;

CREATE TRIGGER public.call_create_entry
    AFTER INSERT ON person
    FOR EACH ROW
    EXECUTE PROCEDURE create_entry();

-- 2. trigger to remove settings entry.

CREATE OR REPLACE FUNCTION public.remove_entry()
RETURNS trigger
LANGUAGE plpgsql
AS
$$
BEGIN
  DELETE FROM public.settings WHERE id = OLD.id;
  RETURN OLD;
END;
$$;

CREATE TRIGGER public.call_remove_entry
    AFTER DELETE ON person
    FOR EACH ROW
    EXECUTE PROCEDURE remove_entry();

ROLLBACK;