from flask import Flask, request, render_template, redirect, flash

app = Flask(__name__)
app.secret_key = "hello"

@app.route('/')
def index():
	return render_template('index.html')

@app.route("/results", methods=["GET", "POST"])
def upload_results():
	if request.method == "POST":
		fin_param = []
		fin_param.append(request.form["proj_life"])
		fin_param.append(request.form["veh_spd"])
		fin_param.append(request.form["loan_intr"])
		fin_param.append(request.form["loan_prd"])
		fin_param.append(request.form["infl_r"])
		fin_param.append(request.form["ann_OM"])
		fin_param.append(request.form["disc_r"])
		fin_param.append(request.form["engy_inf_r"])

		chrg_sys = []
		chrg_sys.append(request.form["mag_c_cost"])
		chrg_sys.append(request.form["Tx_inst_cost"])
		chrg_sys.append(request.form["Tx_inv_cost"])
		chrg_sys.append(request.form["TR_rect_cost"])
		chrg_sys.append(request.form["TR_tran_cost"])
		chrg_sys.append(request.form["TR_stuff_cost"])
		chrg_sys.append(request.form["monit_cost"])

		grid_innc = []
		grid_innc.append(request.form["feed_base_c"])
		grid_innc.append(request.form["feed_tot_c"])
		grid_innc.append(request.form["sub_tot_c"])
		grid_innc.append(request.form["sub_var_c"])

		cond_size = []
		cond_size.append(request.form["700_cond"])
		cond_size.append(request.form["550_cond"])
		cond_size.append(request.form["500_cond"])
		cond_size.append(request.form["450_cond"])
		cond_size.append(request.form["400_cond"])
		cond_size.append(request.form["350_cond"])
		cond_size.append(request.form["300_cond"])
		cond_size.append(request.form["250_cond"])
		cond_size.append(request.form["4_0_cond"])

		full_l_recon_c = request.form["full_l_recon_c"]
		full_l_pref_c = request.form["full_l_pref_c"]
	else:
		return render_template("results.html")

if __name__ == '__main__':
    app.run(debug=True)