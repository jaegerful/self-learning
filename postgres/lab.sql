CREATE FUNCTION some()
RETURNS text
LANGUAGE plpgsql
AS
$$
	DECLARE
    	message text;
	BEGIN
    	IF true THEN
        	message := 'if branch';
        ELSE
        	message := 'else branch';
        
        END IF;
            
        RETURN message;
    END;
$$;

SELECT some();