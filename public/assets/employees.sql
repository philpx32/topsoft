DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS designation;
CREATE TABLE IF NOT EXISTS new_employees(id INTEGER PRIMARY KEY,name TEXT, curr_designation_id INTEGER, start_date TEXT, prev_designation_id INTEGER, end_date TEXT, roles TEXT,staff_status TEXT,time_spent TEXT);
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (1, "Nabimanya Nelson John Paul", 1, "2019-12-12", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (2, "Kenneth Ojakol", 2, "2020-06-13", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (3, "Thomas Kyamagero", 3, "2020-10-14", null, "","","pending","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (4, "Paul Nabimanya", 4, "2016-09-21", null, "","","active","old");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (5, "Kyamagero Paul", 5, "", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (6, "SSali Peter",6, "", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (7, "Zizinga Pius",8, "2020-09-01", 7, "2020-08-31","","active","old");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (8, "Jalia Nabukalu Esther",9, "2020-09-28", null, "","","pending","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (9, "John Zizinga",2, "2021-01-01", null, "","","pending","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (10, "Sharon Opoka",10, "", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (11, "Nabimanya Paul",11, "", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (12, "Ojakol Kenneth",2, "", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (13, "Opoka Jane Sharon",12, "", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (14, "Kikoyo Paul",13, "", null, "","","active","new");
INSERT INTO employees(id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) VALUES (15, "Esther Nabukalu",14, "", null, "","","active","new");
CREATE TABLE IF NOT EXISTS designation(id INTEGER PRIMARY KEY,designation TEXT);
INSERT INTO designation(id,designation) VALUES (1, "Manager");
INSERT INTO designation(id,designation) VALUES (2, "Backend Developer");
INSERT INTO designation(id,designation) VALUES (3, "Accountant");
INSERT INTO designation(id,designation) VALUES (4, "Director of Operations");
INSERT INTO designation(id,designation) VALUES (5, "Network Admin");
INSERT INTO designation(id,designation) VALUES (6, "Team Leader IT");
INSERT INTO designation(id,designation) VALUES (7, "Team Leader Finance");
INSERT INTO designation(id,designation) VALUES (8, "Finance Manager");
INSERT INTO designation(id,designation) VALUES (9, "Systems Admin Intern");
INSERT INTO designation(id,designation) VALUES (10, "Communications Manager");
INSERT INTO designation(id,designation) VALUES (11, "Asst.Director of Operations");
INSERT INTO designation(id,designation) VALUES (12, "General Caretaker");
INSERT INTO designation(id,designation) VALUES (13, "Frontend Developer");
INSERT INTO designation(id,designation) VALUES (14, "Graphics Designer");