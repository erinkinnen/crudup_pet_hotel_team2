CREATE TABLE owner (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(80)
);

CREATE TABLE pets (
    pet_id SERIAL PRIMARY KEY,
    name character varying(60),
    breed character varying(60),
    color character varying(40),
    owner_id integer REFERENCES owner
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    check_in date,
    check_out date,
    pet_id integer REFERENCES pets
);
