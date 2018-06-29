$(function() {
    'use strict';


    // DOM pointers
    const canvasEl = $('#pixel_canvas');
    const sizePickerEl = $('#sizePicker');

    // Set color
    function setColor() {
        const colorVal = $('#colorPicker').val();
        return colorVal;
    }


    // Delete grid
    function deleteGrid() {
        $(canvasEl).empty();
    }

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

    // Create grid
    function makeGrid() {

        
        deleteGrid();

        const width = $('#input_width').val();
        const height = $('#input_height').val();

        for (let r = 0; r < width; r++) {
            const row = $('<tr></tr>');

            for (let c = 0; c < height; c++) {
                const cell = $('<td></td>');
                $(row).append(cell);

                $(cell).click(function() {
                    cell.css('background-color', setColor());
                });
            }

            $(canvasEl).append(row);
        }
    }


    // Event listener that invokes makeGrid() function
    sizePickerEl.on('submit', function(e) {
        e.preventDefault();
        makeGrid();
    });
});
