-- Fix security warnings by setting search_path for functions
CREATE OR REPLACE FUNCTION public.increment_visit_count()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.site_visits 
  SET visit_count = visit_count + 1,
      updated_at = now()
  WHERE id = (SELECT id FROM public.site_visits LIMIT 1)
  RETURNING visit_count INTO new_count;
  
  RETURN new_count;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;