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

var repeat_block = function(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        if (params[2].stack_slots[0] != null){
            for (var i=0; i<values[0]; i++){
                params[2].stack_slots[0].chain_exec();
            }
        }
        return true;
    }else{
        alert('Missing value from repeat block');
        return false;
    }
}

var ifthen_block = function(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        if (values[0][0]){
            if (values[0][1] && params[2].stack_slots[0] != null){
                params[2].stack_slots[0].chain_exec();
            }
            return true;
        } else{
            return false;
        }
    }else{
        alert('Missing value from If/then block');
        return false;
    }
}

function forever_exec(params){
    if (params[2].stack_slots[0] != null && params[3].on_infinite_loop){
        params[2].stack_slots[0].chain_exec();
        var myVar = setTimeout(function(){forever_exec(params)}, 500);
    }
}

var forever_block = function(params){
    params[3].on_infinite_loop = true;
    forever_exec(params);
    return false;
}


