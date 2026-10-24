//=============================================================================
// Patch for Sprite Offset Compatibility
//=============================================================================

/*:
 * @target MV 1.63
 * @plugindesc v1.0.0 Patch for compatibility between Galv's Cam Control and Yanfly's Event Sprite Offset plugins.
 * @version 1.0.0
 * @author Fugahagen
 *
 * @help This plugin patches the compatibility issue between Galv's Cam Control
 * and Yanfly's Event Sprite Offset plugins.
 *
 * ============================================================================
 *  Plugin Parameters
 * ============================================================================
 *
 * None
 *
 * ============================================================================
 *  Plugin Commands
 * ============================================================================
 *
 * None
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * Free for commercial and non-commercial use.
 *
 * ============================================================================
 * License: The MIT License
 * ============================================================================
 *
 * Copyright 2024 Fugahagen
 * This plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 * If you violate the license agreement your mother will
 * die in her sleep tonight! All protections nulled!
 *
 * ============================================================================
 * Credits
 * ============================================================================
 *
 * Credit "Fugahagen" in your game if you feel like it.
 *
 * ============================================================================
 * Version History
 * ============================================================================
 *
 * 1.0.0 - [2024-03-30]: Initial release
 *
 * ============================================================================
 */

//=============================================================================
// Patch for Sprite Offset Compatibility
//=============================================================================
(function () {
  Game_CharacterBase.prototype.screenX = function () {
    var value = Yanfly.EvSpOf.Game_CharacterBase_screenX.call(this);
    if (typeof this.spriteOffsetX === "function") {
      value += this.spriteOffsetX();
    }
    return Math.round(value);
  };
})();
