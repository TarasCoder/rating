$( document ).ready(function() {
    
    let a = 2;
    let sum = 0;
    let avg = 0;
    
    let fiveStars = 0;
    let fourStars = 0;
    let threeStars = 0;
    let twoStars = 0;
    let oneStars = 0;
    
    let allUsersTable = $("#allUsers tbody");
    let trs = $(allUsersTable).find("tr");
    trs.each((elIndex, el)=>{
        let td = $(el).find("td");
        let tdRating = td[a];
        sum += Number($(tdRating).text());

        switch (Number($(tdRating).text())) {
        case 5:
            fiveStars++;
            break;
        case 4:
            fourStars++;
            break;
        case 3:
            threeStars++;
            break;
        case 2:
            twoStars++;
            break;
        case 1:
            oneStars++;
            break;
        default:
            console.error("Error - no matching number");
        }
    })
    avg = sum / trs.length;
    console.log("Length: ", trs.length)
    console.log("Sum ", sum)
    console.log("Average: ", avg.toFixed(1))  
    console.log("Switch 5: " + fiveStars);
    console.log("Switch 4: " + fourStars);
    console.log("Switch 3: " + threeStars);
    console.log("Switch 2: " + twoStars);
    console.log("Switch 1: " + oneStars);

// MAIN STAR RAKING LOGIC
$("#rateYo").rateYo({
    rating: avg.toFixed(1),
    readOnly: true,
    normalFill: "#A0A0A0",
    ratedFill: "#EFC71D"
  });
$("#ratingNumb").text(avg.toFixed(1))
$("#reviewsNumb").text(trs.length + " Reviews")

// Setting detailed stars ranking
let percent5 = (fiveStars * 100) / trs.length;
let percent4 = (fourStars * 100) / trs.length;
let percent3 = (threeStars * 100) / trs.length;
let percent2 = (twoStars * 100) / trs.length;
let percent1 = (oneStars * 100) / trs.length;

$("#bar5").css("width", percent5 + "px");
$("#bar4").css("width", percent4 + "px");
$("#bar3").css("width", percent3 + "px");
$("#bar2").css("width", percent2 + "px");
$("#bar1").css("width", percent1 + "px");

    
});