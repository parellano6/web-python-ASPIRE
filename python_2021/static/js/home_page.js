$(document).ready(function () {
  var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn'),
          allPrevBtn = $('.prevBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      var curStep = $(allNextBtn).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='number'],input[type='url']"),
          curFileIn = curStep.find("input[type='excelUpload'],input[type='url']"),
          isValid = true,
          isFileValid = true;

      var placeNum = 0;
      const placeVal = [];
      for(var i = 0; i < curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).css("border", "2px solid red");
              placeVal[placeNum] = curInputs[i].placeholder
              placeNum++;
          }
          else {
            $(curInputs[i]).css("border", "");
          }
      }

      if (!$item.hasClass('disabled') && isValid == true) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
      else {
        alert("Please do not leave the following values blank:\n" + placeVal.join("\n"));
      }

  });

  allPrevBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

          prevStepWizard.trigger('click');
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='number'],input[type='url']"),
          curFileIn = curStep.find("input[type='excelUpload'],input[type='url']"),
          isValid = true,
          isFileValid = true;


      $(".form-group").removeClass("has-error");
      var placeNum = 0;
      const placeVal = [];
      for(var i = 0; i < curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
              $(curInputs[i]).css("border", "2px solid red");

              placeVal[placeNum] = curInputs[i].placeholder
              placeNum++;
              // document.getElementById("number").style.backgroundColor = "red";
          }
          else {
            $(curInputs[i]).css("border", "");
          }
      }

      for(var x = 0; x < curFileIn.length; x++) {
        if ((curFileIn[x]).files.length == 0) {
          isFileValid = false;
          $(curFileIn[i]).closest(".form-group").addClass("has-error");
          alert("Please upload file");
          isValid == false;
        }
      }

      if(!isValid) {
        alert("Please do not leave the following values blank:\n" + placeVal.join("\n"));
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });


  $('div.setup-panel div a.btn-primary').trigger('click');
});