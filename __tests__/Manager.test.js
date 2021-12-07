const Manager=require("../lib/Manager");

const name="billy";
const id="badge";
const email="billys email";
const role="Manager";
const officeNumber="office number";
const emp=new Manager(name, id, email, officeNumber);

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
test("office number",()=>{
    expect(emp.getOfficeNumber()).toBe(officeNumber);
});