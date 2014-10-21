/**
 * Created by chandrashekar on 10/21/2014.
 */

define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var Vector2 = require( 'DOT/Vector2' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var PlayPauseButton = require( 'SCENERY_PHET/buttons/PlayPauseButton' );
  var StepButton = require( 'SCENERY_PHET/buttons/StepButton' );


  function StatesOfMattersView( statesOfMatters ) {


    ScreenView.call( this, { renderer: 'svg' } );

    // view co-ordinates (370,140) map to model origin (0,0) with inverted y-axis (y grows up in the model)
    var modelViewTransform = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      Vector2.ZERO,
      new Vector2( 370, 140 ),
      50 ); //1m = 50Px


    // add the reset button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        statesOfMatters.reset();
      },
      radius: 18,
      bottom: this.layoutBounds.bottom - 7,
      right: this.layoutBounds.right - 13
    } );
    this.addChild( resetAllButton );
    // add play pause button and step button
    var stepButton = new StepButton(
      function() {

      },
      statesOfMatters.isPlayProperty,
      {
        radius: 12,
        stroke: 'black',
        fill: '#005566',
        right: resetAllButton.left - 200,
        bottom: this.layoutBounds.bottom - 14
      }
    );

    this.addChild( stepButton );


  }

  return inherit( ScreenView, StatesOfMattersView );
} );