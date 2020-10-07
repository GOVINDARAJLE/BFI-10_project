

 function cal(){
  var i = 1;
  
  var a = [];
      for(i=1;i<11;i++){
        const rbs = document.querySelectorAll(`input[name="q${i}"]`);
        let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                a[i] = parseInt(selectedValue);
                break;
            }
          }
      }// for i 
    console.log(a);
    const extraversion = -(a[1])+a[6];
    const agreeableness= a[2]+-(a[7]);
    const conscietiousness = -(a[3])+a[8];
    const neurotisism = -(a[4])+a[9];
    const openness = -(a[5])+a[10];
   
    res = document.getElementById('results');

    res.style.paddingBottom = "0%";
  
    res.innerHTML = `<br>
  <em>  
<P><b> &nbspExtraversion:</b>Show'spositive emotions.</P>
<P><b> &nbspSympathy:</b>Show's Agreeableness.	</P>
<P><b> &nbspOrganization:</b>Show's Conscientiousness.	</P>
<P><b> &nbspEmotional Stability:</b>Show's tolerant,trusting or moody.	</P>
<P><b> &nbspIntellect:</b> Show's openness.	</P>
</em>
    
    <em><br>Your score between (-4 and 4)
<br><br>
<table style="border-spacing:10px;">
              <tr>
					<th> &nbsp Factor </th> <th>Score</th>
			  </tr>
			   <tr>
				<b> <td> &nbsp Extraversion </td> <td> ${extraversion} </td>
				</tr>
				<tr>
				<td>
					&nbsp Sympathy</td> <td> ${agreeableness} </td>
				</tr>


<tr> <td>
&nbsp  Organization</td><td> ${conscietiousness}  </td>
</tr>


<tr><td> 
&nbsp Emotional Stability</td> <td> ${-neurotisism} </td>
</tr>


<tr>
    <td>&nbsp  Intellect</td> <td> ${openness} </td>
</tr>
</em>
</table>

<br><br><br>
<a target="_blank" style='color:#5567a6;' href="https://psdlab.uoregon.edu/measuring-the-big-five-personality-domains/" > Learn more about personality factors </a>
`;
    
  
    res.scrollIntoView(true); 
  
  };
  
console.log("hello there! Have a suggestion? Contact me.");