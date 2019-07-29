# Converting XML to JavaScript

## Experiments
- going to try [xml2j](shttps://www.npmjs.com/package/xml2js)
  - simple XML, console log what I get
  - complex XML 1 (app XML)
  - complex XML 2 (prototype)

## My notes as I am doing this
- create README for notes (did it the "cool kids" ways `touch README.md`)
- initialize project: `npm init -y`
- install package `npm install xml2js`
- Run experiments!


## Challenge, could have a web page like this

"Red"  "Black"  "Red"  "Blue"

- essentially two pieces of text that are the same, the only way to know the difference is the structure of the XML
For example, one is like this
```XML
<attribute name="color">
  <level value="red">
      <language key="description" locale="en"><![CDATA[<img src="assets/tooltips/color_red.jpg">]]>Electric crimson or red is a color.</language>
      <language key="displayname" locale="en">Red</language>
      <language key="icon" locale="en">icon-color-red</language>
  </level>
  ...
  ...
</attribute>
```

And one like this
```XML
<attribute name="car_color">
  <level value="red">
      <language key="description" locale="en"><![CDATA[<img src="assets/tooltips/color_red.jpg">]]>Electric crimson or red is a color.</language>
      <language key="displayname" locale="en">Red</language>
      <language key="icon" locale="en">icon-color-red</language>
  </level>
  ...
  ...
</attribute>
```

While this example is constructed to highlight the issue, it still illustrates the challenge
- a global "search and replace" for the text "Red" would change would change both instances, only if we wanted to change one. This also applies if there are two levels with with the same `displayname` value.
- a way to do this, would be to ensure we understand the mapping between the object and the text that is displayed in the HTML
  - so when we change the text in the HTML page, it would also change the model
    - note: this would require a change to the HTML in Platform
  - once the model is changed, how do we make sure the XML is updated? there are 2 challenges
    - 1) the model data structure is different from what xml2js creates, so a mapping would need to be created
    - 2) we have to re-write the XML document.
  - so it sounds like points 1 and 2 above are our steps :)
    - we need a mapping between Platform model and xml2js model. Once we have this we can traverse and update any text that we need to.
    - we need to write the file. This is where the edit-page project comes into play
      - Platform can add the editable text, update the model, on save that is when the data is sent to the server and the mapping between model data and xml2js data happens. Then updates happen.    
