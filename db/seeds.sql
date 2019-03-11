-- Make sure we are using healthguru database
use healthguru_db;

-- Truncate all tables before populating
SET FOREIGN_KEY_CHECKS=0;
truncate table users;
SET FOREIGN_KEY_CHECKS=1;

SET FOREIGN_KEY_CHECKS=0;
truncate table userhealthproviders;
SET FOREIGN_KEY_CHECKS=1;

SET FOREIGN_KEY_CHECKS=0;
truncate table usermedications;
SET FOREIGN_KEY_CHECKS=1;

SET FOREIGN_KEY_CHECKS=0;
truncate table userprocedures;
SET FOREIGN_KEY_CHECKS=1;

-- hpid (health care provider id is out name for NPID - National Provider ID

-- Populate data for our first user John Smith (Himanshu)
insert into users (firstname, lastname, zipcode, birthyear, gender, email, cell, height, weight) 
values("John", "Smith", "08816", 1970, "Male", "himanshu.pandit@outlook.com", "201-918-0080", 183, 210);

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(1, "1669522595", "190101", "190401");

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(1, "1679607451", "181222", null);

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (1, "Norvasc", "5 mg", 2, "190326", "Hypertension");

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (1, "Metformin", "500 mg", 0, "190405", "Diabetes - Blood Sugar");

insert into userprocedures (uid, procedurename, proceduredate)
values (1, "Blood Work", "180102");

insert into userprocedures (uid, procedurename, proceduredate)
values (1, "EKG", "170102");

-- Populate data for our second user Steve Ryan (Prashanth)
insert into users (firstname, lastname, zipcode, birthyear, gender, email, cell, height, weight) 
values("Steve", "Ryan", "08816", 1970, "Male", "prashanth.mijar@gmail.com", "609-775-5922", 183, 210);

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(2, "1669522595", "190101", null);

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(2, "1679607451", "181222", null);

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (2, "Norvasc", "5 mg", 2, "190326", "Hypertension");

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (2, "Metformin", "500 mg", 3, "190405", "Diabetes - Blood Sugar");

insert into userprocedures (uid, procedurename, proceduredate)
values (2, "Blood Work", "190102");

insert into userprocedures (uid, procedurename, proceduredate)
values (2, "EKG", "180102");

-- Populate data for our third user Mary Kwon (Berungi)
insert into users (firstname, lastname, zipcode, birthyear, gender, email, cell, height, weight) 
values("Mary", "Kwon", "08816", 1970, "Female", "brinnetbirungi@yahoo.com", "848-391-2898", 183, 210);

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(3, "1669522595", "190101", null);

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(3, "1679607451", "181222", null);

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (3, "Norvasc", "5 mg", 2, "190326", "Hypertension");

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (3, "Metformin", "500 mg", 3, "190405", "Diabetes - Blood Sugar");

insert into userprocedures (uid, procedurename, proceduredate)
values (3, "Blood Work", "190102");

insert into userprocedures (uid, procedurename, proceduredate)
values (3, "EKG", "180102");

-- Populate data for our third user Robert Nice (Juan)
insert into users (firstname, lastname, zipcode, birthyear, gender, email, cell, height, weight) 
values("Robert", "Nice", "08816", 1970, "Male", "juanduran2323@gmail.com", "551-597-5041", 183, 210);

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(4, "1669522595", "190101", null);

insert into userhealthproviders (uid, hpid, lastvisit, nextvisit) 
values(4, "1679607451", "181222", null);

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (4, "Norvasc", "5 mg", 2, "190326", "Hypertension");

insert into usermedications (uid, medicationname, dosage, numrefill, nextrefilldate, healthcondition)
values (4, "Metformin", "500 mg", 3, "190405", "Diabetes - Blood Sugar");

insert into userprocedures (uid, procedurename, proceduredate)
values (4, "Blood Work", "190102");

insert into userprocedures (uid, procedurename, proceduredate)
values (4, "EKG", "180102");

-- Display all results
SELECT * FROM users;
SELECT * FROM userhealthproviders;
SELECT * FROM usermedications;
SELECT * FROM userprocedures;