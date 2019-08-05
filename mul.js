let line;
line="<table border='1' width='300' cellspacing='0'>";
for(let i=1;i<10;i++)
{
    line=line+"<tr>";
    for(let j=2;j<10;j++)
    {
        line=line +"<td>"+j+"x"+i+"="+(i*j)+"</td>";
    }
    line=line+"</tr>";
}
line=line+"</table>";
document.write(line);