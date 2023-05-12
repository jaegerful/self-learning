SELECT rolname FROM pg_roles;

CREATE ROLE alex WITH LOGIN PASSWORD 'password';
CREATE ROLE maria WITH LOGIN PASSWORD 'password';
CREATE ROLE johnny WITH INHERIT LOGIN PASSWORD 'password'; -- INHERIT is implicit in all roles.

CREATE ROLE engineers WITH SUPERUSER LOGIN PASSWORD 'password';
GRANT SELECT ON ALL TABLES IN SCHEMA public TO engineers;

GRANT engineers TO alex; 
REVOKE engineers FROM alex;

GRANT engineers TO maria; 
GRANT engineers TO johnny; 

-- lOGIN, SUPERUSER, CREATEDB, and CREATEROLE are privileges that cannot be inherited.

SELECT rolname FROM pg_roles;