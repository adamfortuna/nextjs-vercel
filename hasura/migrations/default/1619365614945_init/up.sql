SET check_function_bodies = false;
CREATE TABLE public.books (
    id integer NOT NULL,
    title text NOT NULL,
    isbn text,
    isbn13 text,
    release_date date
);
CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;
ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);
ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
