const Intern=require("../lib/Intern");

const name="billy";
const id="badge";
const email="billys email";
const role="Intern";
const school="school";
const emp=new Intern (name, id, email, school);

test("create object",()=>{
    expect(typeof emp).toBe("object");
});
test("stores the name",()=>{
    expect(emp.getName()).toBe(name);
});
test("stores the id",()=>{
    expect(emp.getId()).toBe(id);
});
test("stores the email",()=>{
    expect(emp.getEmail()).toBe(email);
});
test("stores the role",()=>{
    expect(emp.getRole()).toBe(role);
});
test("stores the school",()=>{
    expect(emp.getSchool()).toBe(school);
});