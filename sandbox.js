/**
Copyright (c) 2012, James Mortensen (jmort253@gmail.com)
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer. 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies, 
either expressed or implied, of the FreeBSD Project.

**/

// demonstrates how to use storageAPI in sandbox

   
    window.onload = function() {
       
        if(storageAPI.CHROME_EXTENSION == true) {
            // initialize chrome storage postMessage listeners
            storageAPI.delegator();
        } else {
            // just use window.localStorage and delegate to the onload handler
            storageAPI.sandbox.window.onload();
        }

    };

    storageAPI.sandbox.window.onload = function () {
        // legacy onload handler for sandboxed page


        // initialize storageAPI to use window.localStorage or chrome storage APIs
        storageAPI.initSandbox(function() { 
            /* callback handler - put code here that runs after storage is ready */
            document.getElementById("save").onclick = function() {
                storageAPI.setItem("sandboxTest", document.getElementById("name").value);
            };

            document.getElementById("load").onclick = function() {
                var value = storageAPI.getItem("sandboxTest");

                document.getElementById("name").value = value;
            };

//            document.getElementById("load").setAttribute("onclick", function() { console.info("whatup!"); });
 
            console.info("done loading!");
        });
    };
