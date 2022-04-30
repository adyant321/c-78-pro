var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://1.bp.blogspot.com/-w4dW9ULqzwc/UhfBqvvZnYI/AAAAAAAAFZs/DnHqPRIys6E/s1600/little+boys+smile.jpg", "https://ak.picdn.net/shutterstock/videos/23867575/thumb/8.jpg" , "https://tse3.mm.bing.net/th?id=OIP.2VI-kIZjoR7xMHFVE_gt8QHaEK&pid=Api&P=0&w=289&h=162", "https://infeed.in/wp-content/uploads/2020/05/enjoy-motherhood-2-2.jpg", ];           
var names = ["Fmaily Book","aryadit Singh", "adyanyt Singh", "santosh kumar", "aakanksha shadaho"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 4
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
