const Engineer=require("../lib/Engineer");

const name="billy";
const id="badge";
const email="billys email";
const role="Engineer";
const github="githubadress";
const emp=new Engineer(name, id, email, github);

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
test("stores the github",()=>{
    expect(emp.getGithub()).toBe(github);
});