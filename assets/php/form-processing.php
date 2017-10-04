<?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
    <?php
    }
  else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $email=$_REQUEST['phone'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($phone=="")||($message==""))
        {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        }
    else{
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
        mail("emily.butte@gmail.com", $subject, $message, $from);
        echo "Thanks for reaching out! We'll get back to yo sooon.";
        }
    }
  ?>
