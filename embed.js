<div id="myH2">test</div>
<script type="text/javascript">
let txt = `<insert docs here>`
  var docs = []
    let parsed = txt.split('\n')
    if (parsed.length >= 3) {
    for (var i = 0; i < parsed.length; i+=3){
    	docs.push({
          title: parsed[i],
          desc: parsed[i+1],
          gdoc: parsed[i+2].substring(0, parsed[i+2].lastIndexOf('/')) + '/preview?authuser=0'
        })
    }
    }
    
    

  var html = ""

  docs.map((val) => {
    html += `<table style="width:98vw">
<tr>
  <td style="padding-left:10px;width:30%;"><strong>` + val.title + `</strong><br />
  ` + val.desc + ` <br/></td>
  <td style="padding-left:5px;width:70%;" rowspan="2" style="vertical-align:top"><iframe style="width:100%;height:500px" jsname="L5Fo6c" jscontroller="usmiIb" jsaction="rcuQ6b:WYd;" class="YMEQtf L6cTce-purZT L6cTce-pSzOP KfXz0b" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals" frameborder="0" aria-label="Document" allowfullscreen="" src="` + val.gdoc + `"></iframe></td>
</tr>
<tr>
<td>
</tr>
</table>`
  })

  document.getElementById("myH2").innerHTML = html;

</script>
