console.log("logic.js is connected")

// define command controls
d3.select("#button-addon1").on("click", Diagnose);
d3.select("#button-addon2").on("click", Reset);

// initialize the web page
init();

// define the initialization logic
function init()
{
    // define the plot's data object
    let bar_trace = {
        x: [1, 2, 3],
        y: ["1", "2", "3"],
        name: "Most Likely Conditions",
        type: "bar",
        orientation: "h"
    };

    // store the plot's data object in a trace
    let bar_traceData = [bar_trace];

    // define the plot's layout
    let bar_layout = {
        autosize: true,
        xaxis: {
            title: "Probability"
        },
        yaxis: {
            automargin: true,
            title: "Conditions"
        }
    };

    // create the Plotly bar plot
    Plotly.newPlot("plot", bar_traceData, bar_layout);
}

// define the diagnose click event
function Diagnose()
{
    // the d3 selectAll functionality wasn't working well, so I brute-forced it
    // not happy about that, but it technically works
    let checkbox_ids = [];
    checkbox_ids.push(d3.select("#id_itching"));
    checkbox_ids.push(d3.select("#id_skin_rash"));
    checkbox_ids.push(d3.select("#id_nodal_skin_eruptions"));
    checkbox_ids.push(d3.select("#id_continuous_sneezing"));
    checkbox_ids.push(d3.select("#id_shivering"));
    checkbox_ids.push(d3.select("#id_chills"));
    checkbox_ids.push(d3.select("#id_joint_pain"));
    checkbox_ids.push(d3.select("#id_stomach_pain"));
    checkbox_ids.push(d3.select("#id_acidity"));
    checkbox_ids.push(d3.select("#id_ulcers_on_tongue"));
    checkbox_ids.push(d3.select("#id_muscle_wasting"));
    checkbox_ids.push(d3.select("#id_vomiting"));
    checkbox_ids.push(d3.select("#id_burning_micturition"));
    checkbox_ids.push(d3.select("#id_spotting_urination"));
    checkbox_ids.push(d3.select("#id_fatigue"));
    checkbox_ids.push(d3.select("#id_weight_gain"));
    checkbox_ids.push(d3.select("#id_anxiety"));
    checkbox_ids.push(d3.select("#id_cold_hands_and_feets"));
    checkbox_ids.push(d3.select("#id_mood_swings"));
    checkbox_ids.push(d3.select("#id_weight_loss"));
    checkbox_ids.push(d3.select("#id_restlessness"));
    checkbox_ids.push(d3.select("#id_lethargy"));
    checkbox_ids.push(d3.select("#id_patches_in_throat"));
    checkbox_ids.push(d3.select("#id_irregular_sugar_level"));
    checkbox_ids.push(d3.select("#id_cough"));
    checkbox_ids.push(d3.select("#id_high_fever"));
    checkbox_ids.push(d3.select("#id_sunken_eyes"));
    checkbox_ids.push(d3.select("#id_breathlessness"));
    checkbox_ids.push(d3.select("#id_sweating"));
    checkbox_ids.push(d3.select("#id_dehydration"));
    checkbox_ids.push(d3.select("#id_indigestion"));
    checkbox_ids.push(d3.select("#id_headache"));
    checkbox_ids.push(d3.select("#id_yellowish_skin"));
    checkbox_ids.push(d3.select("#id_dark_urine"));
    checkbox_ids.push(d3.select("#id_nausea"));
    checkbox_ids.push(d3.select("#id_loss_of_appetite"));
    checkbox_ids.push(d3.select("#id_pain_behind_the_eyes"));
    checkbox_ids.push(d3.select("#id_back_pain"));
    checkbox_ids.push(d3.select("#id_constipation"));
    checkbox_ids.push(d3.select("#id_abdominal_pain"));
    checkbox_ids.push(d3.select("#id_diarrhoea"));
    checkbox_ids.push(d3.select("#id_mild_fever"));
    checkbox_ids.push(d3.select("#id_yellow_urine"));
    checkbox_ids.push(d3.select("#id_yellowing_of_eyes"));
    checkbox_ids.push(d3.select("#id_acute_liver_failure"));
    checkbox_ids.push(d3.select("#id_fluid_overload"));
    checkbox_ids.push(d3.select("#id_swelling_of_stomach"));
    checkbox_ids.push(d3.select("#id_swelled_lymph_nodes"));
    checkbox_ids.push(d3.select("#id_malaise"));
    checkbox_ids.push(d3.select("#id_blurred_and_distorted_vision"));
    checkbox_ids.push(d3.select("#id_phlegm"));
    checkbox_ids.push(d3.select("#id_throat_irritation"));
    checkbox_ids.push(d3.select("#id_redness_of_eyes"));
    checkbox_ids.push(d3.select("#id_sinus_pressure"));
    checkbox_ids.push(d3.select("#id_runny_nose"));
    checkbox_ids.push(d3.select("#id_congestion"));
    checkbox_ids.push(d3.select("#id_chest_pain"));
    checkbox_ids.push(d3.select("#id_weakness_in_limbs"));
    checkbox_ids.push(d3.select("#id_fast_heart_rate"));
    checkbox_ids.push(d3.select("#id_pain_during_bowel_movements"));
    checkbox_ids.push(d3.select("#id_pain_in_anal_region"));
    checkbox_ids.push(d3.select("#id_bloody_stool"));
    checkbox_ids.push(d3.select("#id_irritation_in_anus"));
    checkbox_ids.push(d3.select("#id_neck_pain"));
    checkbox_ids.push(d3.select("#id_dizziness"));
    checkbox_ids.push(d3.select("#id_cramps"));
    checkbox_ids.push(d3.select("#id_bruising"));
    checkbox_ids.push(d3.select("#id_obesity"));
    checkbox_ids.push(d3.select("#id_swollen_legs"));
    checkbox_ids.push(d3.select("#id_swollen_blood_vessels"));
    checkbox_ids.push(d3.select("#id_puffy_face_and_eyes"));
    checkbox_ids.push(d3.select("#id_enlarged_thyroid"));
    checkbox_ids.push(d3.select("#id_brittle_nails"));
    checkbox_ids.push(d3.select("#id_swollen_extremeties"));
    checkbox_ids.push(d3.select("#id_excessive_hunger"));
    checkbox_ids.push(d3.select("#id_extra_marital_contacts"));
    checkbox_ids.push(d3.select("#id_drying_and_tingling_lips"));
    checkbox_ids.push(d3.select("#id_slurred_speech"));
    checkbox_ids.push(d3.select("#id_knee_pain"));
    checkbox_ids.push(d3.select("#id_hip_joint_pain"));
    checkbox_ids.push(d3.select("#id_muscle_weakness"));
    checkbox_ids.push(d3.select("#id_stiff_neck"));
    checkbox_ids.push(d3.select("#id_swelling_joints"));
    checkbox_ids.push(d3.select("#id_movement_stiffness"));
    checkbox_ids.push(d3.select("#id_spinning_movements"));
    checkbox_ids.push(d3.select("#id_loss_of_balance"));
    checkbox_ids.push(d3.select("#id_unsteadiness"));
    checkbox_ids.push(d3.select("#id_weakness_of_one_body_side"));
    checkbox_ids.push(d3.select("#id_loss_of_smell"));
    checkbox_ids.push(d3.select("#id_bladder_discomfort"));
    checkbox_ids.push(d3.select("#id_foul_smell_ofurine"));
    checkbox_ids.push(d3.select("#id_continuous_feel_of_urine"));
    checkbox_ids.push(d3.select("#id_passage_of_gases"));
    checkbox_ids.push(d3.select("#id_internal_itching"));
    checkbox_ids.push(d3.select("#id_toxic_look"));
    checkbox_ids.push(d3.select("#id_depression"));
    checkbox_ids.push(d3.select("#id_irritability"));
    checkbox_ids.push(d3.select("#id_muscle_pain"));
    checkbox_ids.push(d3.select("#id_altered_sensorium"));
    checkbox_ids.push(d3.select("#id_red_spots_over_body"));
    checkbox_ids.push(d3.select("#id_belly_pain"));
    checkbox_ids.push(d3.select("#id_abnormal_menstruation"));
    checkbox_ids.push(d3.select("#id_dischromic_patches"));
    checkbox_ids.push(d3.select("#id_watering_from_eyes"));
    checkbox_ids.push(d3.select("#id_increased_appetite"));
    checkbox_ids.push(d3.select("#id_polyuria"));
    checkbox_ids.push(d3.select("#id_family_history"));
    checkbox_ids.push(d3.select("#id_mucoid_sputum"));
    checkbox_ids.push(d3.select("#id_rusty_sputum"));
    checkbox_ids.push(d3.select("#id_lack_of_concentration"));
    checkbox_ids.push(d3.select("#id_visual_disturbances"));
    checkbox_ids.push(d3.select("#id_receiving_blood_transfusion"));
    checkbox_ids.push(d3.select("#id_receiving_unsterile_injections"));
    checkbox_ids.push(d3.select("#id_coma"));
    checkbox_ids.push(d3.select("#id_stomach_bleeding"));
    checkbox_ids.push(d3.select("#id_distention_of_abdomen"));
    checkbox_ids.push(d3.select("#id_history_of_alcohol_consumption"));
    checkbox_ids.push(d3.select("#id_blood_in_sputum"));
    checkbox_ids.push(d3.select("#id_prominent_veins_on_calf"));
    checkbox_ids.push(d3.select("#id_palpitations"));
    checkbox_ids.push(d3.select("#id_painful_walking"));
    checkbox_ids.push(d3.select("#id_pus_filled_pimples"));
    checkbox_ids.push(d3.select("#id_blackheads"));
    checkbox_ids.push(d3.select("#id_scurring"));
    checkbox_ids.push(d3.select("#id_skin_peeling"));
    checkbox_ids.push(d3.select("#id_silver_like_dusting"));
    checkbox_ids.push(d3.select("#id_small_dents_in_nails"));
    checkbox_ids.push(d3.select("#id_inflammatory_nails"));
    checkbox_ids.push(d3.select("#id_blister"));
    checkbox_ids.push(d3.select("#id_red_sore_around_nose"));
    checkbox_ids.push(d3.select("#id_yellow_crust_ooze"));

    // convert the checked items into a Flask friendly format
    checked_str = ""
    symptom_checked = false;
    for (let i = 0; i < checkbox_ids.length; i++)
    {
        if (checkbox_ids[i].property("checked"))
        {
            checked_str += "1"
            symptom_checked = true;
        }
        else
        {
            checked_str += "0"
        }
    }

    // call the flask server if there is at least one symptom selected
    if (symptom_checked)
    {
        d3.json(`get_prediction/${checked_str}/`).then(function (data)
        {
            x = data.probabilities;
            y = data.conditions;

            Plotly.restyle("plot", "x", [x]);
            Plotly.restyle("plot", "y", [y]);

            // assign the treatments
            d3.select("#treatment1").text(data.treatments[0]);
            d3.select("#treatment2").text(data.treatments[1]);
            d3.select("#treatment3").text(data.treatments[2]);
            d3.select("#treatment4").text(data.treatments[3]);

            // place the main condition output in the diagnosis bar
            d3.select("#main_condition_output").property("value", data.prediction);

            // enable the results accordions
            d3.selectAll("#conditional_accordion_button").attr("disabled", null);
        });
    }
}

// define the reset click event
function Reset()
{
    let checkbox_ids = [];
    checkbox_ids.push(d3.select("#id_itching"));
    checkbox_ids.push(d3.select("#id_skin_rash"));
    checkbox_ids.push(d3.select("#id_nodal_skin_eruptions"));
    checkbox_ids.push(d3.select("#id_continuous_sneezing"));
    checkbox_ids.push(d3.select("#id_shivering"));
    checkbox_ids.push(d3.select("#id_chills"));
    checkbox_ids.push(d3.select("#id_joint_pain"));
    checkbox_ids.push(d3.select("#id_stomach_pain"));
    checkbox_ids.push(d3.select("#id_acidity"));
    checkbox_ids.push(d3.select("#id_ulcers_on_tongue"));
    checkbox_ids.push(d3.select("#id_muscle_wasting"));
    checkbox_ids.push(d3.select("#id_vomiting"));
    checkbox_ids.push(d3.select("#id_burning_micturition"));
    checkbox_ids.push(d3.select("#id_spotting_urination"));
    checkbox_ids.push(d3.select("#id_fatigue"));
    checkbox_ids.push(d3.select("#id_weight_gain"));
    checkbox_ids.push(d3.select("#id_anxiety"));
    checkbox_ids.push(d3.select("#id_cold_hands_and_feets"));
    checkbox_ids.push(d3.select("#id_mood_swings"));
    checkbox_ids.push(d3.select("#id_weight_loss"));
    checkbox_ids.push(d3.select("#id_restlessness"));
    checkbox_ids.push(d3.select("#id_lethargy"));
    checkbox_ids.push(d3.select("#id_patches_in_throat"));
    checkbox_ids.push(d3.select("#id_irregular_sugar_level"));
    checkbox_ids.push(d3.select("#id_cough"));
    checkbox_ids.push(d3.select("#id_high_fever"));
    checkbox_ids.push(d3.select("#id_sunken_eyes"));
    checkbox_ids.push(d3.select("#id_breathlessness"));
    checkbox_ids.push(d3.select("#id_sweating"));
    checkbox_ids.push(d3.select("#id_dehydration"));
    checkbox_ids.push(d3.select("#id_indigestion"));
    checkbox_ids.push(d3.select("#id_headache"));
    checkbox_ids.push(d3.select("#id_yellowish_skin"));
    checkbox_ids.push(d3.select("#id_dark_urine"));
    checkbox_ids.push(d3.select("#id_nausea"));
    checkbox_ids.push(d3.select("#id_loss_of_appetite"));
    checkbox_ids.push(d3.select("#id_pain_behind_the_eyes"));
    checkbox_ids.push(d3.select("#id_back_pain"));
    checkbox_ids.push(d3.select("#id_constipation"));
    checkbox_ids.push(d3.select("#id_abdominal_pain"));
    checkbox_ids.push(d3.select("#id_diarrhoea"));
    checkbox_ids.push(d3.select("#id_mild_fever"));
    checkbox_ids.push(d3.select("#id_yellow_urine"));
    checkbox_ids.push(d3.select("#id_yellowing_of_eyes"));
    checkbox_ids.push(d3.select("#id_acute_liver_failure"));
    checkbox_ids.push(d3.select("#id_fluid_overload"));
    checkbox_ids.push(d3.select("#id_swelling_of_stomach"));
    checkbox_ids.push(d3.select("#id_swelled_lymph_nodes"));
    checkbox_ids.push(d3.select("#id_malaise"));
    checkbox_ids.push(d3.select("#id_blurred_and_distorted_vision"));
    checkbox_ids.push(d3.select("#id_phlegm"));
    checkbox_ids.push(d3.select("#id_throat_irritation"));
    checkbox_ids.push(d3.select("#id_redness_of_eyes"));
    checkbox_ids.push(d3.select("#id_sinus_pressure"));
    checkbox_ids.push(d3.select("#id_runny_nose"));
    checkbox_ids.push(d3.select("#id_congestion"));
    checkbox_ids.push(d3.select("#id_chest_pain"));
    checkbox_ids.push(d3.select("#id_weakness_in_limbs"));
    checkbox_ids.push(d3.select("#id_fast_heart_rate"));
    checkbox_ids.push(d3.select("#id_pain_during_bowel_movements"));
    checkbox_ids.push(d3.select("#id_pain_in_anal_region"));
    checkbox_ids.push(d3.select("#id_bloody_stool"));
    checkbox_ids.push(d3.select("#id_irritation_in_anus"));
    checkbox_ids.push(d3.select("#id_neck_pain"));
    checkbox_ids.push(d3.select("#id_dizziness"));
    checkbox_ids.push(d3.select("#id_cramps"));
    checkbox_ids.push(d3.select("#id_bruising"));
    checkbox_ids.push(d3.select("#id_obesity"));
    checkbox_ids.push(d3.select("#id_swollen_legs"));
    checkbox_ids.push(d3.select("#id_swollen_blood_vessels"));
    checkbox_ids.push(d3.select("#id_puffy_face_and_eyes"));
    checkbox_ids.push(d3.select("#id_enlarged_thyroid"));
    checkbox_ids.push(d3.select("#id_brittle_nails"));
    checkbox_ids.push(d3.select("#id_swollen_extremeties"));
    checkbox_ids.push(d3.select("#id_excessive_hunger"));
    checkbox_ids.push(d3.select("#id_extra_marital_contacts"));
    checkbox_ids.push(d3.select("#id_drying_and_tingling_lips"));
    checkbox_ids.push(d3.select("#id_slurred_speech"));
    checkbox_ids.push(d3.select("#id_knee_pain"));
    checkbox_ids.push(d3.select("#id_hip_joint_pain"));
    checkbox_ids.push(d3.select("#id_muscle_weakness"));
    checkbox_ids.push(d3.select("#id_stiff_neck"));
    checkbox_ids.push(d3.select("#id_swelling_joints"));
    checkbox_ids.push(d3.select("#id_movement_stiffness"));
    checkbox_ids.push(d3.select("#id_spinning_movements"));
    checkbox_ids.push(d3.select("#id_loss_of_balance"));
    checkbox_ids.push(d3.select("#id_unsteadiness"));
    checkbox_ids.push(d3.select("#id_weakness_of_one_body_side"));
    checkbox_ids.push(d3.select("#id_loss_of_smell"));
    checkbox_ids.push(d3.select("#id_bladder_discomfort"));
    checkbox_ids.push(d3.select("#id_foul_smell_ofurine"));
    checkbox_ids.push(d3.select("#id_continuous_feel_of_urine"));
    checkbox_ids.push(d3.select("#id_passage_of_gases"));
    checkbox_ids.push(d3.select("#id_internal_itching"));
    checkbox_ids.push(d3.select("#id_toxic_look"));
    checkbox_ids.push(d3.select("#id_depression"));
    checkbox_ids.push(d3.select("#id_irritability"));
    checkbox_ids.push(d3.select("#id_muscle_pain"));
    checkbox_ids.push(d3.select("#id_altered_sensorium"));
    checkbox_ids.push(d3.select("#id_red_spots_over_body"));
    checkbox_ids.push(d3.select("#id_belly_pain"));
    checkbox_ids.push(d3.select("#id_abnormal_menstruation"));
    checkbox_ids.push(d3.select("#id_dischromic_patches"));
    checkbox_ids.push(d3.select("#id_watering_from_eyes"));
    checkbox_ids.push(d3.select("#id_increased_appetite"));
    checkbox_ids.push(d3.select("#id_polyuria"));
    checkbox_ids.push(d3.select("#id_family_history"));
    checkbox_ids.push(d3.select("#id_mucoid_sputum"));
    checkbox_ids.push(d3.select("#id_rusty_sputum"));
    checkbox_ids.push(d3.select("#id_lack_of_concentration"));
    checkbox_ids.push(d3.select("#id_visual_disturbances"));
    checkbox_ids.push(d3.select("#id_receiving_blood_transfusion"));
    checkbox_ids.push(d3.select("#id_receiving_unsterile_injections"));
    checkbox_ids.push(d3.select("#id_coma"));
    checkbox_ids.push(d3.select("#id_stomach_bleeding"));
    checkbox_ids.push(d3.select("#id_distention_of_abdomen"));
    checkbox_ids.push(d3.select("#id_history_of_alcohol_consumption"));
    checkbox_ids.push(d3.select("#id_blood_in_sputum"));
    checkbox_ids.push(d3.select("#id_prominent_veins_on_calf"));
    checkbox_ids.push(d3.select("#id_palpitations"));
    checkbox_ids.push(d3.select("#id_painful_walking"));
    checkbox_ids.push(d3.select("#id_pus_filled_pimples"));
    checkbox_ids.push(d3.select("#id_blackheads"));
    checkbox_ids.push(d3.select("#id_scurring"));
    checkbox_ids.push(d3.select("#id_skin_peeling"));
    checkbox_ids.push(d3.select("#id_silver_like_dusting"));
    checkbox_ids.push(d3.select("#id_small_dents_in_nails"));
    checkbox_ids.push(d3.select("#id_inflammatory_nails"));
    checkbox_ids.push(d3.select("#id_blister"));
    checkbox_ids.push(d3.select("#id_red_sore_around_nose"));
    checkbox_ids.push(d3.select("#id_yellow_crust_ooze"));

    // set all the checkboxes to unchecked
    for (let i = 0; i < checkbox_ids.length; i++)
    {
        checkbox_ids[i].property("checked", false);
    }


    d3.select("#treatment1").text("");
    d3.select("#treatment2").text("");
    d3.select("#treatment3").text("");
    d3.select("#treatment4").text("");

    // place the main condition output in the diagnosis bar
    d3.select("#main_condition_output").property("value", "");

    // close then disable the results accordions
    d3.selectAll("#conditional_accordion_button").property("aria-expanded", "false");
    
    d3.selectAll("#collapse_results_treatments").property("class", "accordion-collapse collapse");
    d3.selectAll("#collapse_results_plot").property("class", "accordion-collapse collapse");
    

    d3.selectAll("#conditional_accordion_button").attr("disabled", true);
}