--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-07-10 19:22:57

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
-- TOC entry 202 (class 1259 OID 25065)
-- Name: student; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.student (
    id integer NOT NULL,
    fname character varying(100),
    mname character varying(100),
    lname character varying(100),
    gender character varying(20),
    mobile_no bigint,
    email character varying(100),
    dob date,
    address character varying(200)
);


ALTER TABLE public.student OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 25063)
-- Name: student_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.student_id_seq OWNER TO postgres;

--
-- TOC entry 2989 (class 0 OID 0)
-- Dependencies: 201
-- Name: student_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.student_id_seq OWNED BY public.student.id;


--
-- TOC entry 2851 (class 2604 OID 25068)
-- Name: student id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.student ALTER COLUMN id SET DEFAULT nextval('public.student_id_seq'::regclass);


--
-- TOC entry 2983 (class 0 OID 25065)
-- Dependencies: 202
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.student (id, fname, mname, lname, gender, mobile_no, email, dob, address) FROM stdin;
11	vrunda 	jayantibhai 	savaliya	female	8758394357	vrunda.2511.vs@gmail.com	1999-11-10	Wartburgstr., 31c, C/O, Lathiya
\.


--
-- TOC entry 2990 (class 0 OID 0)
-- Dependencies: 201
-- Name: student_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.student_id_seq', 11, true);


-- Completed on 2021-07-10 19:22:57

--
-- PostgreSQL database dump complete
--

