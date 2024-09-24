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
-- Name: individuals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.individuals (
    animal_id integer NOT NULL,
    nickname character varying(255),
    common_name character varying(255),
    scientist_name character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sightings (
    sighting_id integer NOT NULL,
    date_time timestamp with time zone,
    animal_id integer,
    location character varying(255),
    healthy boolean,
    sighter_email character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT sightings_sighter_email_check CHECK (((sighter_email)::text ~* '^[^@]+@[^@]+\.[^@]+$'::text))
);


--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sightings_sighting_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sightings_sighting_id_seq OWNED BY public.sightings.sighting_id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.species (
    species_id integer NOT NULL,
    common_name character varying(255),
    scientific_name character varying(255),
    amount_living integer,
    status_code character varying(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: species_species_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.species_species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: species_species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.species_species_id_seq OWNED BY public.species.species_id;


--
-- Name: sightings sighting_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sightings ALTER COLUMN sighting_id SET DEFAULT nextval('public.sightings_sighting_id_seq'::regclass);


--
-- Name: species species_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.species ALTER COLUMN species_id SET DEFAULT nextval('public.species_species_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.individuals (animal_id, nickname, common_name, scientist_name, created_at) FROM stdin;
143	Slinky	Black-footed Ferret	Dr. Hansel Brainicus	2024-09-21 22:48:49.818585-05
157	Dirty Paws	Black-footed Ferret	Dr. Hansel Brainicus	2024-09-21 22:49:41.501077-05
232	Sneaky	Salt-Marsh Harvest Mouse	Dr. Lucas Bobucas	2024-09-21 22:51:03.912904-05
246	Prankster Jerry	Salt-Marsh Harvest Mouse	Dr. Daisy Doodoo	2024-09-21 22:54:29.191648-05
314	The Fluffster	Giant Panda	Natalia Mammalia	2024-09-21 22:56:08.983591-05
317	Stitch	Giant Panda	Natalia Mammalia	2024-09-21 22:57:41.721699-05
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sightings (sighting_id, date_time, animal_id, location, healthy, sighter_email, created_at) FROM stdin;
1	2023-04-21 12:03:00-05	232	San Francisco	t	helpfulcitizen@gmail.com	2024-09-21 23:02:17.229921-05
2	2024-02-04 14:57:04-06	317	Ocean Park Hong Kong	t	intern@oceanpark.net	2024-09-21 23:04:40.419918-05
3	2024-06-03 19:08:24-05	143	Meeteetse, Wyoming	f	sadsighter@gmail.com	2024-09-21 23:06:29.407926-05
4	2022-10-31 10:05:23-05	157	Trick-or-Treating in the Rockies	f	animallover92@yahoo.com	2024-09-21 23:08:24.649786-05
5	2024-09-03 15:15:15-05	246	New York City Subway	t	daisydog@gmail.com	2024-09-21 23:10:40.914306-05
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.species (species_id, common_name, scientific_name, amount_living, status_code, created_at) FROM stdin;
1	Black-footed Ferret	Mustela nigripes	800	EN	2024-09-21 22:28:17.891596-05
2	Salt-Marsh Harvest Mouse	Reithrodontomys raviventris	8430	EN	2024-09-21 22:33:18.256374-05
3	Giant Panda	Ailuropoda melanoleuca	2500	VU	2024-09-21 22:36:30.445166-05
\.


--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sightings_sighting_id_seq', 5, true);


--
-- Name: species_species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.species_species_id_seq', 3, true);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (animal_id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (sighting_id);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (species_id);


--
-- PostgreSQL database dump complete
--

