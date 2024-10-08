import pandas as pd
import os
from openpyxl import load_workbook


login_csv = "Z:/Onkar Otari - Intern/ID Password/trial.csv"

base_dir = 'Z:/Onkar Otari - Intern/MJA Client Information & Code/MJA_Client_Info/Clients_Data/'
fya_dir = "Z:/Onkar Otari - Intern/MJA Client Information & Code/MJA_Client_Info/FYA/FYA_Data/"
fyi_dir = "Z:/Onkar Otari - Intern/MJA Client Information & Code/MJA_Client_Info/FYI/FYI_Data/"

fya_download_dir = r"Z:/Onkar Otari - Intern/MJA Client Information & Code/MJA_Client_Info/FYA/FYA_PDF"
fyi_download_dir = r"Z:/Onkar Otari - Intern/MJA Client Information & Code/MJA_Client_Info/FYI/FYI_PDF"

basic_user_info = base_dir + 'User_Info.csv'
refund_demand_path = base_dir + 'Refund_Demand.csv'
tax_deposit_path = base_dir + 'Tax_Deposit.csv'
recent_filed_return = base_dir + 'RecentFiledReturn.csv'
recent_form_filed_path = base_dir + 'recent_form_filed_info.csv'
active_bank_path = base_dir + 'Active_Bank.csv'
inactive_bank_path = base_dir + 'InActive_Bank.csv'
failed_bank_path = base_dir + 'Failed_Bank.csv'
juris_diction = base_dir + 'Juris_Diction_Info.csv'
src_business_salaried = base_dir + 'Src_Business_Salaried.csv'
src_house_property = base_dir + 'Src_Hourse_Property.csv'
authorised_signature = base_dir + 'Auth_Sign.csv'
representative_asseses = base_dir + 'Representative_Assessee.csv'
active_demat_account = base_dir + 'Active_Demat_Account.csv'

fya_notice_count = fya_dir + 'FYA_Count.csv'
fya_notice_description = fya_dir + 'FYA_Notice_Description.csv'
fya_all_notices_path = fya_dir + 'FYA_All_Notices.csv'
fya_notices_letter = fya_dir + 'FYA_Notice_Letter.csv'

fyi_notice_count = fyi_dir + 'FYI_NoticeCount.csv'
fyi_notice_description = fyi_dir + 'FYI_Notice_Description.csv'
fyi_all_notices = fyi_dir + 'FYI_All_Notices.csv'
fyi_notices_letter = fyi_dir + 'FYI_Notice_Letters.csv'