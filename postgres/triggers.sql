-- function must return OLD or NEW (a trigger entry).

CREATE TRIGGER call_do_something
BEFORE DELETE
ON a_table
FOR EACH ROW
EXECUTE PROCEDURE do_something();