/*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if ALL the the weeks in the calendar array having more days in the week
that you drank water than you didn't.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks,
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days of water for every week in the calendar,
then return true. Otherwise, return false.

*/


// const adequateWaterTracker = cal =>
//   cal.map(wk =>
//     wk.reduce((sum, day) =>
//       sum + (day > 0), 0
//     )
//   ).every(wetDays =>
//     wetDays > 3
//   );

// one line form of the formatted version above(I formatted in a way to try to better
// understand the flow through the code), below is chat gpt's second summary upon
// requesting more succint code

const adequateWaterTracker = cal => cal.map(wk => wk.reduce((sum, day) => sum + (day > 0), 0)).every(wetDays => wetDays > 3);

// result of asking chat gpt to make its solution more succinct

// function adequateWaterTracker(cal) {
//   return cal
//     .map(wk => wk.reduce((sum, day) => sum + (day > 0), 0))
//     .every(wetDays => wetDays > 3);
// }

// chat gpt fixed a possible edge case, a scenario where there are only 5 days given for the
// week and 3 days are wet and 2 are dry, my code would count this as a wet week, but the
// problem specifies that a wet week must have 4 days with water... possibly wouldn't occur
// if the inputs are always week arrays that have data for 7 days, but eh, i went with it.

// function adequateWaterTracker(calendar) {
//   let wetWeeks = 0;
//   for (let i = 0; i < calendar.length; i++) {
//     let daysWithWater = 0;
//     const week = calendar[i];
//     for (let j = 0; j < week.length; j++) {
//       const day = week[j];
//       if (day > 0) {
//         daysWithWater++;
//       }
//     }
//     if (daysWithWater > 3) {
//       wetWeeks++;
//     }
//   }
//   return wetWeeks === calendar.length;
// }

// my solution below

// function adequateWaterTracker(calendar) {
//   let noWater = 0;
//   let water = 0;
//   let wetWeek = 0;
//   let dryWeek = 0;
//   for (let i = 0; i < calendar.length; i++) {
//     const week = calendar[i];
//     for (let j = 0; j < week.length; j++) {
//       const day = week[j];
//       if (day === 0) {
//         noWater++;
//       } else
//         water++;
//     }
//     if (water > noWater) {
//       wetWeek++;
//     } else
//       dryWeek++;
//     water = noWater = 0;
//   }
//   return dryWeek === 0;
// }

const calendar1 = [
  [0, 0, 3, 1, 0, 4, 0],
  [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true
