CREATE or REPLACE PROCEDURE display_student_by_level (lev VARCHAR2) AS
    CURSOR curs_student IS SELECT * FROM STUDENT WHERE ID_LEV=lev;
    r_student student%ROWTYPE;
BEGIN
    OPEN curs_student;
        LOOP
        FETCH curs_student INTO r_student;
            EXIT WHEN curs_student%NOTFOUND;
            DBMS_OUTPUT.PUT_LINE(r_student.std_name || ' ' || r_student.id_lev);
        END LOOP;
    CLOSE curs_student;


END;

create or replace procedure display_count_by_level (lev varchar) AS
    count_by_level NUMBER;
BEGIN 
   SELECT COUNT(*) INTO  count_by_level
   FROM STUDENT
   WHERE LOWER(ID_LEV) = LOWER(lev);
   DBMS_OUTPUT.PUT_LINE('The number of student in the level ' || lev || ' is ' || count_by_level);

END;    


EXECUTE display_count_by_level('MrSd1');


