import './newProduct.css'

export default function NewProduct() {
  return (
	<div className="newProduct">
		<div className="newProductContainer">
			<div className="newProductLeft">
				<span className="newProductTitle">
					<h1>New Product</h1>
				</span>
				<form className="newProductForm">
					<div className="newProductItem">
						<label>Image</label>
						<input type="file" />
					</div>
					<div className="newProductItem">
						<label>Name</label>
						<input 
							type="text" 
							className="newProductItemInput"
							placeholder="Name"
						/>
					</div>
					<div className="newProductItem">
						<label>Stock</label>
						<input 
							type="text" 
							className="newProductItemInput"
							placeholder="Name"
						/>
					</div>
					<div className="newProductItem">
						<label>Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<button className="newProductButton">Update</button>
				</form>
			</div>
			<div className="newProductRight"></div>
		</div>
	</div>
  )
}
