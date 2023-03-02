
d3.csv('./data.csv').then(function (data) {

    var allWeeks = Array.from(d3.group(data, d => d.Week));
    var allLinks = Array.from(d3.group(data, d => d.Link));
  
    // Week 2
    var Week2 = d3.select('#week2-table');
    console.log(allWeeks[0][1]);
    console.log(allLinks[1][0]);
  
    var trContent = Week2.selectAll('.mytr')
        .data(allWeeks[0][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
    
    // Week 3
    var Week3 = d3.select('#week3-table');
    console.log(allWeeks[1][1]);
    console.log(allLinks[4][0]);
  
    var trContent = Week3.selectAll('.mytr')
        .data(allWeeks[1][1])
        .enter()
        .append('tr')
        .attr('class', 'mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
  
    // Week 4
    var Week4 = d3.select('#week4-table');
    console.log(allWeeks[2][1]);
    console.log(allLinks[8][0]);
  
    var trContent = Week4.selectAll('.mytr')
        .data(allWeeks[2][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
    
    // Week 5
    var Week5 = d3.select('#week5-table');
    console.log(allWeeks[3][1]);
    console.log(allLinks[12][0]);
  
    var trContent = Week5.selectAll('.mytr')
        .data(allWeeks[3][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
      
    // Week 6
    var Week6 = d3.select('#week6-table');
    console.log(allWeeks[4][1]);
    console.log(allLinks[17][0]);
  
    var trContent = Week6.selectAll('.mytr')
        .data(allWeeks[4][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
  
    // Week 7
    var Week7 = d3.select('#week7-table');
    console.log(allWeeks[5][1]);
    console.log(allLinks[21][0]);
  
    var trContent = Week7.selectAll('.mytr')
        .data(allWeeks[5][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
  
    // Week 8
    var Week8 = d3.select('#week8-table');
    console.log(allWeeks[6][1]);
    console.log(allLinks[25][0]);
  
    var trContent = Week8.selectAll('.mytr')
        .data(allWeeks[6][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
    
    // Week 9
    var Week9 = d3.select('#week9-table');
    console.log(allWeeks[7][1]);
    console.log(allLinks[29][0]);
  
    var trContent = Week9.selectAll('.mytr')
        .data(allWeeks[7][1])
        .enter()
        .append('tr')
        .attr('class', 'mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
  
    // Week 10
    var Week10 = d3.select('#week10-table');
    console.log(allWeeks[8][1]);
    console.log(allLinks[34][0]);
  
    var trContent = Week10.selectAll('.mytr')
        .data(allWeeks[8][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
    
    // Week 12
    var Week12 = d3.select('#week12-table');
    console.log(allWeeks[9][1]);
    console.log(allLinks[38][0]);
  
    var trContent = Week12.selectAll('.mytr')
        .data(allWeeks[9][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
  
    // Week 13
    var Week13 = d3.select('#week13-table');
    console.log(allWeeks[10][1]);
    console.log(allLinks[43][0]);
  
    var trContent = Week13.selectAll('.mytr')
        .data(allWeeks[10][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
    
    // Week 14
    var Week14 = d3.select('#week14-table');
    console.log(allWeeks[11][1]);
    console.log(allLinks[47][0]);
  
    var trContent = Week14.selectAll('.mytr')
        .data(allWeeks[11][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
    
    // Week 15
    var Week15 = d3.select('#week15-table');
    console.log(allWeeks[12][1]);
    console.log(allLinks[51][0]);
  
    var trContent = Week15.selectAll('.mytr')
        .data(allWeeks[12][1])
        .enter()
        .append('tr')
        .attr('class','mytr');
  
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Week'];
        }
    );
  
    trContent.append('td')
        .style('text-align', 'center')
        .text(function (x) {
            return x['Date'];
        }
    );
    
    trContent.append('td')
        .style('text-align', 'left')
        .text(function (x) {
            return x['Paper']})
        .style('width','500px')
        .style('cursor', 'pointer')
        //link
        .on("click", function (event,d) {
            console.log(d)
            window.open(d.Link, "_blank");
        })
        ;
  });
  
  
  