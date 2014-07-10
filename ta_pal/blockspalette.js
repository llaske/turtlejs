/* Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.*/

function BlocksPalette(width, height, fill_color, layer, pal_desc, global_tracker){
    this.container = null;
    this.global_tracker = global_tracker;
    this.pal_desc = pal_desc;
    this.init_palette(width, height, fill_color, layer);
}

BlocksPalette.prototype = {
    constructor: BlocksPalette,
    init_palette: function(width, height, fill_color, layer){
        this.container = new PaletteContainer(width, height, fill_color, layer);
        this.make_block_factories();
    },
    show: function(){
        this.container.show();
    },
    hide: function(){
        this.container.hide();
    },
    is_visible: function(){
        return this.container.is_visible();
    },
    is_collide: function(point){
        return this.container.is_collide(point);
    },
    make_block_factories: function(){
        var sprit1 = new Sprite(image_tracker.get_resource('box2'), this.container.layer, true, false, null, null, [0, 28, 82]);
        var factory = new BlockFactory([5, 5], sprit1, 'text_block', this, [DEFAULT_LANG, BLOCK_SIDE, 'text']);
		
        var sprit1 = new Sprite(image_tracker.get_resource('basic1arg_yellow'), this.container.layer, true);
        new BlockFactory([135, 5], sprit1, 'show_block', this, [DEFAULT_LANG, BLOCK_SIDE, 'show']);
        
        sprit1 = new Sprite(image_tracker.get_resource('basic2arg'), this.container.layer, true);
        new BlockFactory([255, 5], sprit1, 'store_in_box_block', this, [DEFAULT_LANG, BLOCK_SIDE, 'store_in_box']);
      
        sprit1 = new Sprite(image_tracker.get_resource('head'), this.container.layer, true);
        new BlockFactory([135, 55], sprit1, 'start_block', this, [DEFAULT_LANG, BLOCK_SIDE, 'start']);
      
        sprit1 = new Sprite(image_tracker.get_resource('head1arg'), this.container.layer, true);
        new BlockFactory([5, 55], sprit1, 'action_make_block', this, [DEFAULT_LANG, BLOCK_SIDE, 'action_make']);
        
        var sprit1 = new Sprite(image_tracker.get_resource('basic1arg_yellow'), this.container.layer, true);
        new BlockFactory([375, 5], sprit1, 'action_call_block', this, [DEFAULT_LANG, BLOCK_SIDE, 'action_call']);
        
        
        
    }
}
