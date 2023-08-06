var a = prompt("Enter marks in percentage")

if(a >=80 )
{
    console.log("Distinction")
}
else if(a >= 60 && a <= 79)
{
    console.log("First division")
}
else if(a >= 50 && a <= 59)
{
    console.log("Second division")
}
else if(a >= 40 && a <= 49)
{
    console.log("Third division")
}
else
{
    console.log("Failed!!")
}