CREATE OR REPLACE FUNCTION something()
RETURNS text
LANGUAGE plpgsql
AS
$$
	DECLARE
    	message text;
		number integer := 1;
	BEGIN
    	IF (number = 1) THEN
        	message := 'number = 1';
        ELSIF (number = 2) THEN
        	message := 'number = 2';
        ELSE
			message := 'number = 3';
        END IF;
            
        RETURN message;
    END;
$$;

SELECT something();