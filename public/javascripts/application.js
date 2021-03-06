$(function () {
  //open the invitiation form when a share button is clicked
  $( ".share a")
    .button()
    .click(function() {
      //assign this specific Share link element into a variable called "a"
      var a = this;

      //First, set the title of the dialog box to display the folder name
      $("#invitation_form").attr("title", "Share '" + $(a).attr("folder_name") + "' with others");

      //a hack to display the different folder names correctly
      $("ui-dialog-title-invitation_form").text("Share '" + $(a).attr("folder_name") +"' with others");

      //then put the folder_id of the Share link into the hidden field "folder_id" of the invite form
      $("#folder_id").val($(a).attr("folder_id"));

      $( "#invitation_form").dialog({
        height: 300,
        width: 600,
        modal: true,
        buttons: {
          "Share":function() {
            var post_url = $("#invitation_form form").attr("action");
            $.post(post_url, $("#invitation_form form").serialize(), null, "script");
            return false;
          },
          Cancel: function() {
            $(this).dialog("close");
          }
        },
        close: function () {

        }
      });
      return false;
    });
});
