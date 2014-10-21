/**
 * Created by chandrashekar on 10/21/2014.
 */


define( function( require ) {
  'use strict';

  // modules
  var PropertySet = require( 'AXON/PropertySet' );
  var inherit = require( 'PHET_CORE/inherit' );


  function SampleModel() {

    PropertySet.call( this, {
        isPlay: true,
        speed: 'normal'
      }
    );

  }

  return inherit( PropertySet, SampleModel, {
    // reset
    reset: function() {
      PropertySet.prototype.reset.call( this );
    }
  } );
} );
