-- $$ are the modern way to initialize strings.

-- parameter modes: 
-- 1. IN (default) - constants
-- 2. OUT - parameters that are all returned by function as a row. cannot be passed in call.
-- 3. INOUT - same as OUT parameters, but must also be assigned a value at function call.

CREATE OR REPLACE FUNCTION insert_entry(IN something INTEGER)
    RETURNS INTEGER -- can be ommited when using OUT or INOUT parameters
    LANGUAGE plpgsql
    AS
$$

    <<custom_name>> -- beginning a plpgsql block.
    DECLARE
        count INTEGER; -- simple declaration.
        id_variable public.person.id%type; -- assignment based on tables or other variables.
        row_variable public.person%rowtype; -- a variable that can hold an entire row from said table.
        another_row_variable record; -- 'record' is a variable for a row, without a predefined structure. it can be reassigned to any structure.
        a_constant CONSTANT INTEGER = 23; -- a constant variable that cannot change. 

    BEGIN -- not a transaction, but a plpgsql block.
        count = 2 -- variables can be altered in the body of the function :D... duh...
        SELECT * FROM public.person INTO id_variable WHERE id = 1;
        RETURN count;
    END custom_name; -- ends block.

$$; -- end of function definition (which could be in one line).

-- global variable 'found' set to true if previous SELECT INTO statement yielded at least one entry.