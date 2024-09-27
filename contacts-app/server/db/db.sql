--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contacts (
    user_id integer NOT NULL,
    name character varying(255),
    phone character varying(255),
    email character varying,
    birthday_notes character varying(255),
    CONSTRAINT proper_email CHECK (((email)::text ~* '^[^@]+@[^@]+\.[^@]+$'::text))
);


--
-- Name: contacts_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contacts_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contacts_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contacts_user_id_seq OWNED BY public.contacts.user_id;


--
-- Name: reminders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reminders (
    reminder_id integer NOT NULL,
    user_id integer,
    reminder character varying(255)
);


--
-- Name: reminders_reminder_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reminders_reminder_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reminders_reminder_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reminders_reminder_id_seq OWNED BY public.reminders.reminder_id;


--
-- Name: contacts user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts ALTER COLUMN user_id SET DEFAULT nextval('public.contacts_user_id_seq'::regclass);


--
-- Name: reminders reminder_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reminders ALTER COLUMN reminder_id SET DEFAULT nextval('public.reminders_reminder_id_seq'::regclass);


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contacts (user_id, name, phone, email, birthday_notes) FROM stdin;
1	Harry Styles	+44 207 8764 2485	1D4ever@gmail.com	02/01/1994
2	Nick Jonas	(310) 453-0293	burninup@aol.com	09/16/1992
3	Taylor Swift	615-000-1313	taytay13@gmail.com	1989!!
\.


--
-- Data for Name: reminders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.reminders (reminder_id, user_id, reminder) FROM stdin;
1	1	Does not actually know you exist
2	1	Likes dogs
3	3	Boyfriend: Travis - plays football
\.


--
-- Name: contacts_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contacts_user_id_seq', 3, true);


--
-- Name: reminders_reminder_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.reminders_reminder_id_seq', 3, true);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (user_id);


--
-- Name: reminders reminders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reminders
    ADD CONSTRAINT reminders_pkey PRIMARY KEY (reminder_id);


--
-- PostgreSQL database dump complete
--

