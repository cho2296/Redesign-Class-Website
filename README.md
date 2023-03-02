# Redesign-Class-Website

The assignment was for Information Visualization course.

Our task was to redesign https://faculty.cc.gatech.edu/~stasko/7450/index.html:

1. You may find our course page a bit old-school, so now you have the chance to change it!  (Prof. Stasko has been using that page design for a long time, and he is averse to change. :^)  The first task asks you to restyle the course pages. To accomplish that, first, you need to write an HTML file to specify the content. You can directly copy & paste the textual content from our course website. You should use proper tags (e.g., h1, p, ul, table, etc.) to display the content. Your website should have an “index.html” to start the page. It should have five tabs for navigation (i.e.,  Home | Course Info | Schedule | Instructor | TA). You can create a single-page application (SPALinks to an external site.) if you prefer (but it is not required). Next, you should add a CSS file to style the website you create. Be creative and make it as appealing/interesting as you want. Feel free to change the fonts, layouts, etc. Note that you have access to the current pages' source through your browser. Feel free to look at that.

2. When your data gets bigger, specifying every element in your HTML file can be laborious! The second component of this HW will have you load a CSV file directly and use JavaScript to add elements to a page dynamically based on the data. More specifically, go to the schedule pageLinks to an external site. of our course website, and you will see the papers we need to read every week under the “Detail” section. We created a papers CSVLinks to an external site. file that has all the data for these papers (i.e., title, author, link, topic). To accomplish this task, you need to: Use D3 (d3.csv) to load our paper data (you can use console.log to check what the data look like). Instead of using HTML to specify every paper, use JavaScript to manipulate the DOM and add papers dynamically. Again, use proper elements (e.g., list or table). 

3. Use SVG to decorate the website banner (header). Right now, it has a PNG logo. You will swap it with SVG shapes and texts (hint: use an <svg> element for the header, then add SVG shapes). Again, you can exert your creativity (the website theme is “information visualization” ). You can also use JavaScript to add shapes dynamically (e.g., using a loop to add multiple rectangles or circles). But that’s not a requirement. 
