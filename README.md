# colorpanel
Simple jQuery plugin to switch css stylesheet skin theme on your template demo

[Demo and usage guide](https://infario.github.io/colorpanel/)

## How to use

### Include plugin Stylesheet on your head

     <link href="dist/jquery.colorpanel.css" rel="stylesheet">

### Include skin Stylesheet on your head with id

    <link href="skins/default.css" id="cpswitch" rel="stylesheet">

### Add panel html code within your body tag

If you want to have transition effect on change of stylsheet have the panel code out of your animate container div : ie #wrapper

      <div id="colorPanel" class="colorPanel">
            <a id="cpToggle" href="#"></a>
            <ul></ul>
        </div>

### Include script on your footer below jQuery

     <script src="dist/jquery.colorpanel.js"></script>

### call the plugin code on your document ready event

    $('#colorPanel').ColorPanel({
                styleSheet: '#cpswitch'
                , animateContainer: '#wrapper'
                , colors: {
                    '#4B77BE': 'skins/default.css'
                    , '#16a085': 'skins/seagreen.css'

                , }
            });

## Options

                {
                styleSheet: '#cpswitch'
                , colors: {
                    '#1abc9c': 'skins/default.css'
                    , '#2980b9': 'skins/blue.css'
                    , '#c0392b': 'skins/red.css'
                , }
                , linkClass: 'linka'
                , animateContainer: false
                }

<table class="pure-table pure-table-horizontal" width="100%">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th>Default</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>styleSheet</td>

<td>string | selector</td>

<td>'#cpswitch'</td>

<td>pass the id of your skin stylesheet link tag</td>

</tr>

<tr>

<td>colors</td>

<td>object</td>

<td>{ '#1abc9c': 'skins/default.css' , '#2980b9': 'skins/blue.css' , '#c0392b': 'skins/red.css' , }</td>

<td>list of color options you are providing as object. Hex color codes as Key and css file path as value</td>

</tr>

<tr>

<td>animateContainer</td>

<td>string | Selector or false</td>

<td>false</td>

<td>pass the container div for whole page to make fadeIn , fadeOut transition</td>

</tr>

<tr>

<td>linkClass</td>

<td>string</td>

<td>'linka'</td>

<td>pass the classname for color anchor</td>

</tr>

</tbody>

</table>
