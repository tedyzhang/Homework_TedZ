var bottles;
for (counter = 99; counter >= 0; counter = counter - 1)
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    if (counter <= 99) {
        console.log(counter+" "+bottles+" of beer on the wall, "+counter+" "+bottles+" of beer.");
    }
    console.log("Take one down. Pass it around."+counter+" "+bottles+" of beer on the wall.");
    if (counter == 1) {
        console.log("No more bottles of beer on the wall.");
    }

}
