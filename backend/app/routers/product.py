from fastapi import APIRouter, HTTPException # type: ignore

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)

products = [
    {
        "id": 1,
        "name": "Dermacare Capsule",
        "shortDescription": "Exclusive herbal skin care formulation that nourishes and protects skin from within.",
        "description": "Dermacare is an exclusive herbal skin care formulation thoughtfully developed by Bilva Wellness to nourish, protect and improve overall skin health from within.",
        "image": f"{BASE_URL}/static/Derma.png", # type: ignore
        "composition": [
            "Sveta Musali (Chlorophytum borivillianum)",
            "Nimba (Azadirachta indica)",
            "Kasturi Haridra (Curcuma aromatica)",
            "Sariba (Hemidesmus indicus)",
            "Guduchi (Tinospora cordifolia)",
            "Shringaveera (Zingiber officinalis)",
            "Tulasi (Ocimum sanctum)",
            "Manjista (Rubia cordifolia)",
            "Khadira (Acacia catechu)",
            "Hareetaki (Terminalia chebula)",
            "Amalaki (Emblica officinalis)",
            "Vibheetaki (Terminalia bellerica)",
            "Kumari (Aloe barbadensis)"
        ],
        "merits": [
            "Retains natural oils of the skin and nourishes hair follicles",
            "Contains Vitamins A, C, E, B2, B3 and B6",
            "Helps reduce fine lines and wrinkles",
            "Works to diminish pigmentation and psoriasis",
            "Helps restore even skin tone",
            "Prevents premature graying, hair fall and split-ends",
            "Improves melanin secretion for smoother, youthful skin"
        ],
        "indications": [
            "Hyperpigmentation",
            "Melasma",
            "Psoriasis",
            "Eczema",
            "Itchy skin",
            "Dark spots",
            "Leucoderma"
        ],
        "presentation": "60 capsules in a sealed LDPE container",
        "category": "skin"
    },

    {
        "id": 2,
        "name": "Insuwell Capsule",
        "shortDescription": "Herbal diabetic support formulation for controlling Type II diabetes.",
        "description": "Insuwell is an exclusive herbal diabetic support formulation developed by Bilva Wellness to help control blood sugar levels and reduce diabetes-related complications.",
        "image": f"{BASE_URL}/static/insuwell.png", # type: ignore
        "composition": [
            "Saptarangi (Salacia reticulata)",
            "Nimba (Azadirachta indica)",
            "Menthi (Trigonella foenum-graecum)",
            "Jamun Beez (Eugenia jambolana)",
            "Madhunasini (Gymnema)"
        ],
        "merits": [
            "Reduces high blood glucose levels",
            "Improves pancreas ability to release insulin",
            "Improves cell sensitivity to insulin",
            "Supports kidney elimination of excess sugar",
            "Reduces absorption of sugar molecules in the gut"
        ],
        "indications": [
            "Hyperglycemia",
            "Impaired glucose tolerance",
            "Excessive thirst",
            "Dry mouth",
            "Frequent urination",
            "Tiredness",
            "Blurred vision",
            "Unintentional weight loss"
        ],
        "presentation": "60 capsules in a sealed LDPE container",
        "category": "diabetes"
    },

    {
        "id": 3,
        "name": "Madhu Niyantran Ras",
        "shortDescription": "Herbal diabetic management drink supporting healthy blood sugar levels.",
        "description": "Madhu Niyantran Ras is an exclusive herbal diabetic management drink developed by Bilva Wellness to support blood sugar control, digestion and metabolism.",
        "image": f"{BASE_URL}/static/madhu.png",
        "composition": [
            "Jambuk (Syzygium cumini)",
            "Podapatri (Madhunasini)",
            "Gokshura (Tribulus terrestris)"
        ],
        "merits": [
            "Reduces hyperglycemia and blood sugar",
            "Reduces fat cell size and lipogenic activity",
            "Useful in chronic constipation and lowers triglycerides",
            "Promotes tissue regeneration",
            "Improves digestion and resistance to infections",
            "Promotes antioxidant activity and reduces toxicity",
            "Acts as a blood purifier and mild laxative"
        ],
        "indications": [
            "Hyperglycemia",
            "Impaired glucose tolerance",
            "Polydipsia",
            "Xerostomia",
            "Polyuria",
            "Fatigue",
            "Blurred vision",
            "Unintentional weight loss"
        ],
        "presentation": "1000 ml Ras in a sealed container presented in a box",
        "category": "diabetes"
    },

    {
        "id": 4,
        "name": "Reloxygen Capsule",
        "shortDescription": "Herbal respiratory support formulation for strong and healthy lungs.",
        "description": "Reloxygen is an exclusive herbal respiratory support formulation developed by Bilva Wellness to purify lungs, improve breathing capacity and strengthen respiratory health.",
        "image": f"{BASE_URL}/static/relo.png", # type: ignore
        "composition": [
            "Sveta Musali (Chlorophytum borivillianum)",
            "Vaasa (Justicia adhatoda)",
            "Katuki (Picrorhiza kurroa)",
            "Kantakari (Solanum xanthocarpum)",
            "Tulasi (Ocimum sanctum)",
            "Saala (Shorea robusta)",
            "Rasna (Alpinia galanga)",
            "Taalesapatri (Abies webbiana)"
        ],
        "merits": [
            "Removes pollutants accumulated in lungs",
            "Improves lung oxygen absorption capacity",
            "Purifies and protects lungs",
            "Boosts immunity and restorative power",
            "Relieves bronchial asthma, cough and breathlessness",
            "Strengthens bronchial pathways"
        ],
        "indications": [
            "Bronchial asthma",
            "Respiratory disorders",
            "Difficulty in breathing"
        ],
        "presentation": "60 capsules in a sealed LDPE container",
        "category": "respiratory"
    },
    {
        "id": 5,
        "name": "Jeevamruth Drink",
        "shortDescription": "Herbal respiratory support formulation for strong and healthy lungs.",
        "description": "Jeevamruth is an exclusive herbal respiratory support formulation developed by Bilva Wellness to purify lungs, improve breathing capacity and strengthen respiratory health.",
        "image": f"{BASE_URL}/static/Jeevamruth_Drink.png",
        "composition": [
            "Sveta Musali (Chlorophytum borivillianum)",
            "Vaasa (Justicia adhatoda)",
            "Katuki (Picrorhiza kurroa)",
            "Kantakari (Solanum xanthocarpum)",
            "Tulasi (Ocimum sanctum)",
            "Saala (Shorea robusta)",
            "Rasna (Alpinia galanga)",
            "Taalesapatri (Abies webbiana)"
        ],
        "merits": [
            "Removes pollutants accumulated in lungs",
            "Improves lung oxygen absorption capacity",
            "Purifies and protects lungs",
            "Boosts immunity and restorative power",
            "Relieves bronchial asthma, cough and breathlessness",
            "Strengthens bronchial pathways"
        ],
        "indications": [
            "Bronchial asthma",
            "Respiratory disorders",
            "Difficulty in breathing"
        ],
        "presentation": "60 capsules in a sealed LDPE container",
        "category": "respiratory"
    },
] 

# ✅ GET ALL PRODUCTS
@router.get("")
def get_products():
    return products


# ✅ GET SINGLE PRODUCT BY ID (FIXED)
@router.get("/{product_id}")
def get_product(product_id: int):
    for product in products:
        if product["id"] == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")
