ALTER TABLE table_name ENABLE ROW LEVEL SECURITY; -- row-level security is not set by default.

-- if no policy is provided, the table will deny all requests to the table.

-- ALL equal to SELECT, INSERT, UPDATE, and DELETE.
-- USING is ran for SELECT and DELETE (and UPDATE's old row). must be true for operation to execute.
-- WITH CHECK is ran for INSERT (and UPDATE's new row). must be true for operation to execute.

-- unless otherwise specified, policies apply to all roles and for all operations.
-- if a WITH CHECK expression is not provided, USING will be used.

CREATE POLICY custom_name ON table_name
AS 
FOR ALL
TO role_name
USING some_expression 

-- row-level security is row-based, whereas role privileges are table-based.
-- policies are locally scoped to a table. thus, their names may be reused in other tables.

-- PERMISSIVE: if there is more than one policy for an operation, the operation will execute if any of the policies yield a true expression.
-- RESTRICTIVE: restricts a PERMISSIVE policy. all RESTRICTIVE policies must evaluate to true for operation to execute. note: a PERMISSIVE policy must exist beforehand.