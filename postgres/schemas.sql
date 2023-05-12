CREATE SCHEMA sales;
CREATE SCHEMA engineering;
CREATE SCHEMA marketing;

CREATE TABLE sales.people();
CREATE TABLE engineering.people();
CREATE TABLE marketing.people();

-- public by default. all other schemas must be named explicitly.